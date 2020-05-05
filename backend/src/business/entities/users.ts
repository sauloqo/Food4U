export class User {
   constructor(
      private id: string,
      private name: string,
      private email: string,
      private password: string,
      private birthdate: string
   ) { }

   public getId(): string {
      return this.id;
   }

   public setId(id: string): void {
      this.id = id;
   }

   public getEmail(): string {
      return this.email;
   }

   public setEmail(email: string): void {
      this.email = email;
   }

   public getPassword(): string {
      return this.password;
   }

   public setPassword(password: string): void {
      this.password = password;
   }

   public getName(): string {
      return this.name;
   }

   public setName(name: string): void {
      this.name = name;
   }

   public getBirthdate(): string {
      return this.birthdate;
   }

   public setBirthdate(birthdate: string): void {
      this.birthdate = birthdate;
   }
}