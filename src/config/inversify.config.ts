import 'reflect-metadata';
import { Container } from 'inversify';

import { CompanyService } from '../services/companyService';
import { StoreService } from "../services/storeService";

import { CompanyRepository } from '../repositories/companyRepository';
import { StoreRepository } from "../repositories/storeRepository";


const container = new Container();

// Services

container.bind<CompanyService>('CompanyService').to(CompanyService);
container.bind<StoreService>('StoreService').to(StoreService);


// Repositories

container.bind<CompanyRepository>('CompanyRepository').to(CompanyRepository);
container.bind<StoreRepository>('StoreRepository').to(StoreRepository);

export default container;
