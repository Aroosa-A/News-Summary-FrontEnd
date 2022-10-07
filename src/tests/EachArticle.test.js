import React from "react";
import EachArticle from "../jsx/EachArticle";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';



describe("Tests for EachArticle", () => {
    it('should render same headline passed as props', () => {
        const mockHeadline = "This is headline";
        render(<MemoryRouter><EachArticle articleHeadline={mockHeadline} /></MemoryRouter>)
        const renderedHeadline = screen.getByText(mockHeadline);
        expect(renderedHeadline).toBeInTheDocument();
    });
    it('should render same images passed as props', () => {
        const mockImage = "image.jpg";
        render(<MemoryRouter><EachArticle articleImage={mockImage} /></MemoryRouter>);
        const renderedImage = screen.getByAltText(/headline/);
        expect(renderedImage).toHaveAttribute("src", mockImage);

    });
    it('should render same bodyText passed as props', () => {
        const mockBodyText = "This is body text";
        render(<MemoryRouter><EachArticle articleBody={mockBodyText} /></MemoryRouter>);
        const renderedBodyText = screen.getByText(mockBodyText);
        expect(renderedBodyText).toBeInTheDocument();
    })
})