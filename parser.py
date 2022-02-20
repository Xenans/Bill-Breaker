import pdfplumber
import re

def parse(filename):

    with pdfplumber.open(filename, laparams={"line_overlap": 0.7}) as pdf:
        text = ''

        for page in pdf.pages:
            text += page.extract_text(
                x_tolerance=3, y_tolerance=3, layout=False, x_density=7.25, y_density=13)
            text += '\n'
        items = re.findall(
            r'^(\d) (.+) CA\$([\d\.]+)', text, flags=re.MULTILINE)

        total = re.search(r'Total [^\s]+', text)
        subtotal = re.search(r'Subtotal [^\s]+', text)
        tax = re.search(r'Tax [^\s]+', text)
        service = re.search(r'Service fee [^\s]+', text)
        delivery = re.search(r'Delivery fee [^\s]+', text)
        promotion = re.search(r'Promotion [^\s]+', text)
        tip = re.search(r'Tip [^\s]+', text)

        values = re.findall(r'\$[^\s)]+', text)

        results = []

        for specific in [total, subtotal, tax, service, delivery, promotion, tip]:
            if specific:
                results.append(specific.group(0))
        print(items, results)
        return(items, results)

if __name__ == "__main__":
    parse('./receipt.pdf')
