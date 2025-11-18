declare module "next/image" {
  import Image from "next/dist/client/image"
  export default Image
  export * from "next/dist/client/image"
}

declare module "next/link" {
  import Link from "next/dist/client/link"
  export default Link
  export * from "next/dist/client/link"
}

declare module "next" {
  export { default } from "next/types"
  export * from "next/types"
}

declare module "next/font/google" {
  export * from "next/dist/compiled/@next/font/google"
}
