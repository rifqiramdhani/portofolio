export {};

declare global {
  interface Window {
    example: string; // whatever type you want to give. (any,number,float etc)
    jQuery: string;
    $: string;
  }
}
