import { Test, TestingModule } from '@nestjs/testing';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';

describe('CatController', () => {
    let catController: CatController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [CatController],
            providers: [CatService],
        }).compile();

        catController = app.get<CatController>(CatController);
    });

    describe('GetCat', () => {
        it('should return Oh! "It\'s a cat!"', () => {
            expect(catController.getCat()).toBe("Oh! It's a cat!");
        });
    });
});
