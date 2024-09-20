import { PartialType } from '@nestjs/mapped-types';
import { CreatePaywallDto } from './create-paywall.dto';

export class UpdatePaywallDto extends PartialType(CreatePaywallDto) {}
