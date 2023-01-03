import "dotenv/config";
import { list } from "@keystone-next/keystone/schema";
import { text, relationship } from "@keystone-next/fields";
import { cloudinaryImage } from "@keystone-next/cloudinary";

export const ProductImage = list({
  fields: {
    product: relationship({ ref: "Product.photo" }),
    image: cloudinaryImage({
      cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_KEY,
        apiSecret: process.env.CLOUDINARY_SECRET,
      },
    }),
    altText: text(),
  },
  ui: {
    listView: {
      initialColumns: ["image", "altText", "product"],
    },
  },
});
