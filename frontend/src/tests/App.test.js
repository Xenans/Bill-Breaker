import { shallow } from 'enzyme'

import App from '../components/App'


describe("App component", () => {
    describe("item tests", () => {
        it("addItem (default args)", () => {
            const wrapper = shallow(<App />);

            wrapper.instance().addItem();

            expect(wrapper.state("items").length).toEqual(1);
        })

        it("addItem (specify args)", () => {
            const wrapper = shallow(<App />);

            wrapper.instance().addItem("Food 1", "20");

            expect(wrapper.state("items").length).toEqual(1);
            expect(wrapper.state("items")[0]["name"]).toEqual("Food 1");
            expect(wrapper.state("items")[0]["price"]).toEqual("20");
        })

        it("deleteItem (item exists)", () => {
            const wrapper = shallow(<App />);

            wrapper.instance().addItem();
            wrapper.instance().deleteItem(1);

            expect(wrapper.state("items").length).toEqual(0);
        })

        it("deleteItem (item dne)", () => {
            const wrapper = shallow(<App />);

            wrapper.instance().addItem();
            wrapper.instance().deleteItem(2);

            expect(wrapper.state("items").length).toEqual(1);
        })

        it("deleteItem (item has users)", () => {
            const wrapper = shallow(<App />);

            wrapper.instance().addItem();
            wrapper.instance().addUser();
            wrapper.instance().addUserToItem(1, 1);

            wrapper.instance().deleteItem(1);

            expect(wrapper.state("items").length).toEqual(0);
            expect(wrapper.state("users")[0]["items"].length).toEqual(0);
        })

        it("setItemName", () => {
            const wrapper = shallow(<App />);

            wrapper.instance().addItem();

            wrapper.instance().setItemName(1, "Food 1");

            expect(wrapper.state("items")[0]["name"]).toEqual("Food 1");
        })

        it("setItemPrice", () => {
            const wrapper = shallow(<App />);

            wrapper.instance().addItem();

            wrapper.instance().setItemPrice(1, "20");

            expect(wrapper.state("items")[0]["price"]).toEqual("20");
        })

        it("addUserToItem (user, item exist)", () => {
            const wrapper = shallow(<App />);

            wrapper.instance().addItem();
            wrapper.instance().addUser();

            wrapper.instance().addUserToItem(1, 1);

            expect(wrapper.state("users")[0]["items"].length).toEqual(1);
            expect(wrapper.state("items")[0]["users"].length).toEqual(1);
        })

        it("addUserToItem (user exists, item dne)", () => {
            const wrapper = shallow(<App />);

            wrapper.instance().addItem();
            wrapper.instance().addUser();

            wrapper.instance().addUserToItem(1, 2);

            expect(wrapper.state("users")[0]["items"].length).toEqual(0);
            expect(wrapper.state("items")[0]["users"].length).toEqual(0);
        })

        it("addUserToItem (user dne, item exists)", () => {
            const wrapper = shallow(<App />);

            wrapper.instance().addItem();
            wrapper.instance().addUser();

            wrapper.instance().addUserToItem(2, 1);

            expect(wrapper.state("users")[0]["items"].length).toEqual(0);
            expect(wrapper.state("items")[0]["users"].length).toEqual(0);
        })

        it("addUserToItem (user, item dne)", () => {
            const wrapper = shallow(<App />);

            wrapper.instance().addItem();
            wrapper.instance().addUser();

            wrapper.instance().addUserToItem(2, 2);

            expect(wrapper.state("users")[0]["items"].length).toEqual(0);
            expect(wrapper.state("items")[0]["users"].length).toEqual(0);
        })

        it("removeUserFromItem (item exists)", () => {
            const wrapper = shallow(<App />);

            wrapper.instance().addItem();
            wrapper.instance().addUser();
            wrapper.instance().addUserToItem(1, 1);
            
            wrapper.instance().removeUserFromItem(1, 1);

            expect(wrapper.state("users")[0]["items"].length).toEqual(0);
            expect(wrapper.state("items")[0]["users"].length).toEqual(0)
        })

        it("removeUserFromItem (item dne)", () => {
            const wrapper = shallow(<App />);

            wrapper.instance().addItem();
            wrapper.instance().addUser();
            wrapper.instance().addUserToItem(1, 1);
            
            wrapper.instance().removeUserFromItem(1, 2);

            expect(wrapper.state("users")[0]["items"].length).toEqual(1);
            expect(wrapper.state("items")[0]["users"].length).toEqual(1)
        })
    })

    describe("user tests", () => {
        it("addUser", () => {
            const wrapper = shallow(<App />);

            wrapper.instance().addUser();

            expect(wrapper.state("users").length).toEqual(1);
        })

        it("deleteUser (user exists)", () => {
            const wrapper = shallow(<App />);

            wrapper.instance().addUser();
            
            wrapper.instance().deleteUser(1);

            expect(wrapper.state("users").length).toEqual(0);
        })

        it("deleteUser (user dne)", () => {
            const wrapper = shallow(<App />);

            wrapper.instance().addUser();
            
            wrapper.instance().deleteUser(2);

            expect(wrapper.state("users").length).toEqual(1);
        })

        it("deleteUser (user has items)", () => {
            const wrapper = shallow(<App />);

            wrapper.instance().addUser();
            wrapper.instance().addItem();
            wrapper.instance().addItemToUser(1, 1);
            
            wrapper.instance().deleteUser(1);

            expect(wrapper.state("users").length).toEqual(0);
            expect(wrapper.state("items")[0]["users"].length).toEqual(0);
        })

        it("setUserName", () => {
            const wrapper = shallow(<App />);
            
            wrapper.instance().addUser();
            wrapper.instance().setUserName(1, "Tyler");

            expect(wrapper.state("users")[0]["name"]).toEqual("Tyler");
        })

        it("addItemToUser (user, item exist)", () => {
            const wrapper = shallow(<App />);
            
            wrapper.instance().addUser();
            wrapper.instance().addItem();

            wrapper.instance().addItemToUser(1, 1);

            expect(wrapper.state("users")[0]["items"].length).toEqual(1);
            expect(wrapper.state("items")[0]["users"].length).toEqual(1);
        })

        it("addItemToUser (user exists, item dne)", () => {
            const wrapper = shallow(<App />);
            
            wrapper.instance().addUser();
            wrapper.instance().addItem();

            wrapper.instance().addItemToUser(1, 2);

            expect(wrapper.state("users")[0]["items"].length).toEqual(0);
            expect(wrapper.state("items")[0]["users"].length).toEqual(0);
        })

        it("addItemToUser (user dne, item exists)", () => {
            const wrapper = shallow(<App />);
            
            wrapper.instance().addUser();
            wrapper.instance().addItem();

            wrapper.instance().addItemToUser(2, 1);

            expect(wrapper.state("users")[0]["items"].length).toEqual(0);
            expect(wrapper.state("items")[0]["users"].length).toEqual(0);
        })

        it("addItemToUser (user, item dne)", () => {
            const wrapper = shallow(<App />);
            
            wrapper.instance().addUser();
            wrapper.instance().addItem();

            wrapper.instance().addItemToUser(2, 2);

            expect(wrapper.state("users")[0]["items"].length).toEqual(0);
            expect(wrapper.state("items")[0]["users"].length).toEqual(0);
        })

        it("removeItemFromUser (user exists)", () => {
            const wrapper = shallow(<App />);
            
            wrapper.instance().addUser();
            wrapper.instance().addItem();

            wrapper.instance().addItemToUser(1, 1);
            wrapper.instance().removeItemFromUser(1, 1);

            expect(wrapper.state("users")[0]["items"].length).toEqual(0);
            expect(wrapper.state("items")[0]["users"].length).toEqual(0);
        })

        it("removeItemFromUser (user dne)", () => {
            const wrapper = shallow(<App />);
            
            wrapper.instance().addUser();
            wrapper.instance().addItem();

            wrapper.instance().addItemToUser(1, 1);
            wrapper.instance().removeItemFromUser(2, 1);

            expect(wrapper.state("users")[0]["items"].length).toEqual(1);
            expect(wrapper.state("items")[0]["users"].length).toEqual(1);
        })
    })
})