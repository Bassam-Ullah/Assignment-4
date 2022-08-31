enum Role {
  SUPERADMIN = "Super Admin",
  ADMIN = "Admin",
  SUBSCRIBER = "Subscriber",
}

class User {
  id?: number;
  firstName: string;
  middleName?: string | undefined;
  lastName: string;
  email: string;
  phone: string;
  role: Role;
  address: string;
  constructor(user: User) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.middleName = user.middleName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.phone = user.phone;
    this.role =
      user.role === "Super Admin"
        ? Role.SUPERADMIN
        : user.role === "Admin"
        ? Role.ADMIN
        : Role.SUBSCRIBER;
    this.address = user.address;
  }
}

export { Role, User };
