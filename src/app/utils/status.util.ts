export class StatusUtil {
  public static convert(status: string): string {
    switch (status) {
      case 'confimed':
        return 'Confirmada';
      case 'waiting_payment':
        return 'Aguardando Pagamento';
      case 'caceled':
        return 'Cacelada';
      case 'in_transit':
        return 'Em Trâsito';
      case 'completed':
        return 'Finalizada';
      default:
        return 'Confirmada';
    }
  }
}
