export default function nameIssuesFixer(element) {
  if (element.includes('_')) {
    let replaced = element.replace('_', ' ');
    let space = replaced.indexOf(' ');
    return (
      replaced[0].toUpperCase() +
      replaced.slice(1, space) +
      ' ' +
      replaced.slice(space + 1)[0].toUpperCase() +
      replaced.slice(space + 2).toLowerCase()
    );
  }
  return element[0].toUpperCase() + element.slice(1).toLowerCase();
}
