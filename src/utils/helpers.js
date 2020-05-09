export function formatDateToPtBr(date) {
  switch (date) {
    case "January":
      return "Janeiro"
    case "February":
      return "Fevereiro"
    case "March":
      return "Março"
    case "April":
      return "Abril"
    case "May":
      return "Maio"
    case "June":
      return "Junho"
    case "July":
      return "Julho"
    case "August":
      return "Agosto"
    case "September":
      return "Setembro"
    case "October":
      return "Outubro"
    case "November":
      return "Novembro"
    case "December":
      return "Dezembro"
    default:
      return "Mês"
  }
}

export const styleTransitionDefault = {
  marginTop: "-9999px",
  opacity: 0,
}

export const transition = {
  position: "fixed",
  opacity: 1,
  marginLeft: 0,
  transition: "opacity 0.2s ease-in",
}

export const cancelTransition = {
  opacity: 0,
  transition: "opacity .5s ease-out",
  marginLeft: "0",
}

export const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

