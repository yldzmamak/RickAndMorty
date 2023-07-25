declare module "*.png" {
  const value: any;
  export default value;
}
declare module "*.md" {
  const content: string
  export = content
}
declare module "*.svg" {
  const content: any;
  export default content;
}

declare module '*.less' {
  const resource: {[key: string]: string};
  export = resource;
}