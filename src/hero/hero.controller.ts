/* eslint-disable prettier/prettier */
import { Controller, Get, Res } from '@nestjs/common';

@Controller('hero')
export class HeroController {
  constructor() {}
  @Get('index')
  index(@Res({passthrough: true}) res) : string {
   return 'Hello World!';
  }
}
