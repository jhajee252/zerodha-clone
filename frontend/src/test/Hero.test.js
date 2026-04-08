// // File: src/test/Hero.test.js
// import React from "react";
// import { render, screen } from "@testing-library/react";
// import '@testing-library/jest-dom';
// import Hero from "../landing_page/home/Hero"; 

// describe("Hero Component", () => {
//     test("renders Home Hero image", () => {
//         render(<Hero />);
//         const heroImage = screen.getByAltText("Home Hero");
//         expect(heroImage).toBeInTheDocument();
//         expect(heroImage).toHaveAttribute('src', 'media/image/homeHero.png');
//     });
// });


// File: src/test/Education.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Education from "../landing_page/home/Education"; // path check karo

describe("Education Component", () => {
    test("renders education image and headings", () => {
        render(<Education />);

        // Image
        const eduImage = screen.getByAltText("error");
        expect(eduImage).toBeInTheDocument();
        expect(eduImage).toHaveAttribute('src', 'media/image/education.svg');

        // Heading
        const heading = screen.getByText(/Free and open market education/i);
        expect(heading).toBeInTheDocument();

        // Link text check (optional)
        const varsityLink = screen.getByText(/Versity/i);
        expect(varsityLink).toBeInTheDocument();

        const tradingLink = screen.getByText(/TradingQ&A/i);
        expect(tradingLink).toBeInTheDocument();
    });
});