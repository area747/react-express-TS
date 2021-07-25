import {Container} from 'inversify';
import {autoProvide, buildProviderModule} from 'inversify-binding-decorators';
import {UserControllerImpl} from '../appController/userControllerImpl';
import bind from 'container/bind';
import 'reflect-metadata';

export const container = new Container();
container.load(buildProviderModule());
console.log(bind);
autoProvide(container, bind);
