export type ImageFolder = {
   background: ImageBackground,
   icons: ImageIcons,
   image: ImageImage,
   m2studio: ImageM2studio,
};

export type ImageBackground = 
   | "WEB02";

export type ImageIcons = 
   | "border"
   | "facebook"
   | "instagram"
   | "twitter"
   | "youtube";

export type ImageImage = 
   | "design_experiences"
   | "general_card_image"
   | "profile_base_image"
   | "why_choose_us_section";

export type ImageM2studio = 
   | "dark_logo"
   | "icon"
   | "light_logo";
