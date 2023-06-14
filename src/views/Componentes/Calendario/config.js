import { LocaleConfig } from 'react-native-calendars';


export default function config(){
LocaleConfig.locales.br = { 
    monthsNames : [ 
      'Janeiro' , 
      'Fevereiro' , 
      'Março' , 
      'Abril' , 
      'Maio' , 
      'Junho' , 
      'Julho' , 
      'Agosto' , 
      'Setembro' , 
      'Outubro' , 
      'Novembro' , 
      'Dezembro' 
    ] , 
    monthsNamesShort : [ 'Jan.' ,  'Fev.' ,  'Mar' ,  'Abr' ,  'Maio' ,  'Jun' ,  'Jul.' ,  'Ago' ,  'Set.' ,  'Out.' ,  'Nov.' ,  'Dez.' ] ,
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort : [ 'Dom.' ,  'Seg.' ,  'Ter.' ,  'Qua.' ,  'Qui.' ,  'Sex.' ,  'Sáb.' ] , 
    hoje : "Hoje" 
  } ;

  LocaleConfig.defaultlocale = 'br';
};

