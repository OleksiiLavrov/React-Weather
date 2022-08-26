export const WeatherConverter = {
   convertUnits: (value) => {
      return (value * 0.75006);
   },
   convertWeatherFeel: (name, value) => {
      switch (name) {
         case 'humidity':
            if (value <= 20) {
               return 'сухо';
            } else if (value > 20 && value <= 70) {
               return 'нормально';
            } else {
               return 'влажно';
            };
         case 'pressure':
            if (value <= 755) {
               return 'пониженное';
            } else if (value > 755 && value <= 765) {
               return 'нормальное';
            } else {
               return 'повышенное';
            };
         case 'wind':
            if (value === 0) {
               return 'безветренно';
            } else if (value > 0 && value <= 15) {
               return 'слабый ветер';
            } else if (value > 15 && value <= 28) {
               return 'ветренно';
            } else if (value > 28 && value <= 42) {
               return 'сильный ветер';
            } else {
               return 'штормовой ветер';
            };
         default:
            return '';
      }
   },
   convertWindDirection: (value) => {
      if (value === 360) {
         return 'южный';
      } else if (value === 90) {
         return 'западный';
      } else if (value === 180) {
         return 'северный';
      } else if (value === 270) {
         return 'восточный';
      } else if (value > 0 && value < 90) {
         return 'юго-западный';
      } else if (value > 90 && value < 180) {
         return 'северо-западный';
      } else if (value > 180 && value < 270) {
         return 'северо-восточный';
      } else if (value > 270 && value < 360) {
         return 'юго-восточный';
      }
   }
};