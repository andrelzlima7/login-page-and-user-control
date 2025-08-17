class DateFormatting {
  private static months: string[] = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  static shortDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = this.months[date.getMonth()];
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
}
