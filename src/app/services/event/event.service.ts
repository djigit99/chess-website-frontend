import { Injectable } from '@angular/core';
import {News} from "../../models/News";
import {Event} from "../../models/Event";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEvents(): Event[] {
    let defEvent = new Event(1, "Шаховий фестиваль Шепетівка-2021",
      "15-17 листопада в м.Старокостянтинів пройшли чемпіонати Хмельницької області серед юнаків та дівчат до 16 та до 18 років.\n" +
      "До участі у турнірах допускалися юнаки та дівчата 2002-2003р.н та 2004-2005 р.н., не нижче 3-го розряду.\n" +
      "\n" +
      "На старт змагань вийшло 18 учасників: зі Старокостянтинова, Хмельницького, Шепетівки та Нетішина.\n" +
      "\n" +
      "Змагання до 16 років проводилися за швейцарською системою у 7 турів, з контролем часу 35хв+20сек. на хід кожному учаснику до кінця партії.\n" +
      "\n" +
      "Чемпіонат до 18 років проходив за круговою системою у 6 турів, з контролем часу 35хв+20сек. на хід кожному учаснику до кінця партії..\n",
      new Date());
    return [
      defEvent,
      defEvent.clone(),
      defEvent.clone(),
      defEvent.clone(),
      defEvent.clone(),
      defEvent.clone(),
      defEvent.clone(),
      defEvent.clone()
    ];
  }
}
