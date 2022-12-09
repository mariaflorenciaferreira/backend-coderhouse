import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from '../dto/create-cat.dto';
import { Cat } from 'src/interface/cat/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private readonly catService:CatsService){}

    @Post()
    async create(@Body() createCatDto:CreateCatDto){
        this.catService.create(createCatDto)
        
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catService.findAll()
    }

    
}
