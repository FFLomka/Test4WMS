export const ROYAL_RULES_NAMES = {
	"*": "Доступ ко всему",
}

export function getRuleName(ruleString: string, defaultName: string): string {
	return ROYAL_RULES_NAMES[ruleString] || defaultName || ruleString
}
