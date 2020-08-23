export type SpotifyUserProfileResponse = {
  country: string;
  display_name: string;
  email: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: [
    {
      height: number;
      url: string;
      width: number;
    }
  ];
  product: "premium" | "free" | "open";
  type: "user";
  uri: string;
};
