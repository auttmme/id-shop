import { Work_Sans } from "next/font/google";

const worksans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-worksans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const fonts = {
  worksans,
};
