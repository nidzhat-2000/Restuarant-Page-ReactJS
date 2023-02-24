import { nameIssuesFixer } from './exporter';

export default function linkIssuesFixer(element) {
  let lowerCategory = element?.toLowerCase();
  let space = lowerCategory?.includes(' ');
  let joinedCategory = lowerCategory?.split(' ').join('_');

  return space ? joinedCategory : nameIssuesFixer(lowerCategory);
}
