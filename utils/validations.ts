export class VuetifyValidator {
  constructor(private readonly message: string) {}

  requiredRule (): (value: any) => (boolean | string) {
    return (value: any) => {
      if ( !!value || value === 0 ) return true;

      return this.message;
    }
  }
}