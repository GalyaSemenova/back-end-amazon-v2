import { IsEmail, MinLength, IsString } from 'class-validator'

export class RefreshTokenDto {
	@IsString()
	refreshToken: string
}
