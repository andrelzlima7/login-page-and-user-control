class DateFormatting {
  private static months: string[] = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  static longDate(date: Date | string): string {
    const d = typeof date === "string" ? new Date(date) : date;
    const day = String(d.getDate()).padStart(2, "0");
    const month = this.months[d.getMonth()];
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  }
}

export { DateFormatting };
