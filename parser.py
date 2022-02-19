import pdfplumber
import re

files = ["./receipt.pdf", "./receiptburrito.pdf",
         "./receipttea.pdf", "./receiptsushi.pdf"]

def processFile(filename):
 
    with pdfplumber.open(filename, laparams={"line_overlap": 0.7}) as pdf:
        text = ''

        for page in pdf.pages:
            text += page.extract_text(
                x_tolerance=3, y_tolerance=3, layout=False, x_density=7.25, y_density=13)
            text += '\n'

        # first_page = pdf.pages[0]
        # words = first_page.extract_words(x_tolerance=3, y_tolerance=3, keep_blank_chars=False, use_text_flow=False, horizontal_ltr=True, vertical_ttb=True, extra_attrs=[])
        # print([word['text'] for word in words])

        # text = first_page.extract_text(
        #     x_tolerance=3, y_tolerance=3, layout=False, x_density=7.25, y_density=13)

        total = re.search(r'Total [^\s]+', text)
        subtotal = re.search(r'Subtotal [^\s]+', text)
        tax = re.search(r'Tax [^\s]+', text)
        service = re.search(r'Service fee [^\s]+', text)
        delivery = re.search(r'Delivery fee [^\s]+', text)
        promotion = re.search(r'Promotion [^\s]+', text)
        tip = re.search(r'Tip [^\s]+', text)

        values = re.findall(r'\$[^\s)]+', text)

        print(text)

        print('=== Specific parsed values ===')
        results = []
        for specific in [total, subtotal, tax, service, delivery, promotion, tip]:
            if specific:
                print(specific.group(0))
                results.append(specific.group(0))

        return values, results

    # print(values)

    # Can we assume the total is the first item?
    # C


def cleanMoney(input: str):
    """given an input string which represents money, trims out the currency and returns the monetary value"""
    pass

print(processFile("./receipt.pdf"))