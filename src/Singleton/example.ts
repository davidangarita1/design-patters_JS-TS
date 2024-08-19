export class WorkWeekDays {
  private lang: string;
  private static instance: WorkWeekDays;

  private days: { [key: string]: string[] } = {
    en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    es: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
  };

  private constructor(lang: string) {
    this.lang = lang;
  }

  public static getInstance(lang: string): WorkWeekDays {
    if (!WorkWeekDays.instance) {
      WorkWeekDays.instance = new WorkWeekDays(lang);
    }
    return WorkWeekDays.instance;
  }

  getDays() {
    return this.days[this.lang];
  }
}
