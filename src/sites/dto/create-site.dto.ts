import { IsString, IsUrl, IsNotEmpty, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { i18nValidationMessage } from 'nestjs-i18n';
import { I18nTranslations } from 'src/i18n/generated/i18n.generated';

export class CreateSiteDto {
  @IsString({
    message: i18nValidationMessage<I18nTranslations>('validation.IS_STRING'),
  })
  @IsNotEmpty({
    message: i18nValidationMessage<I18nTranslations>('validation.NOT_EMPTY'),
  })
  @ApiProperty({ description: 'Es el nombre del sitio' })
  readonly name: string;

  @IsString()
  @IsNotEmpty({ message: 'El campo descripción del sitio es obligatorio' })
  @ApiProperty({ description: 'Es la descripción del sitio' })
  readonly description: string;

  @IsUrl()
  @IsNotEmpty({ message: 'El campo url del sitio es obligatorio' })
  @ApiProperty({ description: 'Es la url del sitio' })
  readonly url: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ description: 'Es el estado del sitio (Activo o Inactivo)' })
  readonly isActive: boolean;
}
