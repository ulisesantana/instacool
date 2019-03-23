export function fromTicketToBranch(ticket: string){
  return ticket
    .normalize('NFD')
    .replace(/[[\]"]|[\u0300-\u036f]/g,'')
    .replace(/\s/g,'_')
}

export default {
  fromTicketToBranch
}