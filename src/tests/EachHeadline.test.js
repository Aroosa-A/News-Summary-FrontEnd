import React from "react";
import { render, screen } from "@testing-library/react";
import EachHeadline from "../jsx/EachHeadline";
import { MemoryRouter } from "react-router-dom";

describe("tests for EachHeadline", () => {
    it('should render same headline passed as props', () => {
        const mockHeadline = "This is headline";
        render(<MemoryRouter><EachHeadline newsHeadline={mockHeadline} /></MemoryRouter>)
        const renderedHeadline = screen.getByText(mockHeadline);
        expect(renderedHeadline).toBeInTheDocument();
    });
    it('should render same images passed as props', () => {
        const mockImage = "image.jpg";
        render(<MemoryRouter><EachHeadline newsImage={mockImage} /></MemoryRouter>);
        const renderedImage = screen.getByTestId(/imageRendered/);
        expect(renderedImage).toHaveAttribute("src", mockImage);

    })
})