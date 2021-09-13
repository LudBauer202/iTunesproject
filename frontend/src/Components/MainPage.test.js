import React from "react";
import DisplaySearch from "./MainPage";
import renderer from 'react-test-renderer';

describe("Rendered Page", () => {
    it('Displays', () => {
        const tree = renderer.create(<DisplaySearch/>).toJSON();
        expect(tree).toMatchSnapshot()
    })
})