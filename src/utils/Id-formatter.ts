export class IdFormatter {
  /**
   * Encurta um ID (UUID, GUID ou qualquer string)
   * @param id - O ID original
   * @param length - Quantidade de caracteres antes dos "..."
   * @returns string formatada
   */
  static shortId(id: string, length: number = 6): string {
    if (!id) return "";
    return id.length > length ? `${id.substring(0, length)}...` : id;
  }
}