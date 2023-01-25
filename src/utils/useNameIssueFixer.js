let lowerCategory;
let spaceIncludes;
let joinedCategory;

export default function use_Upper_Lower_Underscore_IssuesFixer(
  element,
  subElement,
  link
) {
  if (element) {
    lowerCategory = element?.[subElement]?.toLowerCase();
    spaceIncludes = lowerCategory?.includes(' ');
    joinedCategory = lowerCategory?.split(' ').join('_');

    return (spaceIncludes ? joinedCategory : lowerCategory) === link;
  }
}
