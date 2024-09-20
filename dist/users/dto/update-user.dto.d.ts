import { CreateUserAdminDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<CreateUserAdminDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
declare const UpdateUserPasswordDto_base: import("@nestjs/common").Type<Omit<CreateUserAdminDto, "firstName" | "lastName" | "role" | "email">>;
export declare class UpdateUserPasswordDto extends UpdateUserPasswordDto_base {
}
export {};
