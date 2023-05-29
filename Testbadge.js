/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs-extra';
import replace from 'replace-in-file';
import cheerio from 'cheerio';

const readmeFile = './README.md';
const readmeContent = fs.readFileSync(readmeFile, 'utf8');
const html = fs.readFileSync('coverage/index.html', 'utf8');
const $ = cheerio.load(html);
const coveragePercentage = $('div.fl.pad1y.space-right2 span.strong')
	.first()
	.text()
	.trim();

const badgePlaceholder =
	'![check-code-coverage](https://img.shields.io/badge/code--coverage-{COVERAGE_PLACEHOLDER}25-orange)';
const badgeReplacement = badgePlaceholder.replace(
	'{COVERAGE_PLACEHOLDER}',
	coveragePercentage
);

const options = {
	files: readmeFile,
	from: badgePlaceholder,
	to: badgeReplacement,
};

try {
	const changes = replace.sync(options);
} catch (error) {
	console.error('Error updating the badge:', error);
}
