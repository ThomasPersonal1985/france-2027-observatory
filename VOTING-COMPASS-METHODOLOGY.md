# Voting Compass: methodology and editorial rationale

## Structure and completion time
The standard experience contains **24 questions**, with two questions in each of the twelve policy areas. Visitors can optionally continue to an extended version containing **36 questions**, which adds one further question to every area.

The same twelve policy areas appear in both versions:
1. Economy and employment
2. Tax system and public finances
3. Pensions
4. Immigration and asylum
5. Security and justice
6. Healthcare
7. Education and research
8. Climate, energy and agriculture
9. Housing and cost of living
10. Europe and institutions
11. Foreign policy and defence
12. Society, rights and digital policy

The first two questions in each area form the standard compass. The third question in each area is part of the optional extension. This keeps the default experience substantial without making the longest version compulsory. The question split is an editorial usability choice, not a finding from representative user testing. Completion time and abandonment should be measured in a pilot.

## Why equal numbers per area?
Equal question counts make the structure easy to understand and ensure that every area receives the same level of question-level detail in each version. Equal counts are not mathematically essential. What matters for scoring is that an area does not become more influential merely because it contains more questions.

## Respondent importance weights
Each displayed question has a mandatory importance rating:
- Somewhat important = 1
- Very important = 2
- One of my top priorities = 3

The importance selector starts blank. Visitors must rate every question shown before viewing results. A policy answer may be left blank if the visitor genuinely has no view. Importance is a personal preference, not an editorial judgement.

## Candidate matching formula
For each comparable, ordinal question with N ordered answer positions:
`question alignment = 1 - (absolute distance between the visitor's answer and candidate's coded position / (N - 1))`

The intended model averages question alignments within each policy area using visitor importance weights, then averages the twelve policy-area scores equally. The 36-question version adds detail within each area; it must not give an area extra baseline influence just because it has an extra question.

This ordinal-distance model is only suitable where answer options form a defensible ordered scale. A question is eligible only after its data record explicitly marks the scale as reviewed ordinal and names the `ordinal-distance-v1` rubric. Unreviewed, categorical and multi-dimensional questions are excluded unless a separate scoring rubric is published. Candidate position records must have a dated claim, a primary-verified status and source evidence with a locator and summary. It must not be used for categorical or multi-dimensional questions without a separately published coding rubric.

## Evidence coverage and missing positions
A candidate's position may only be coded when a dated, attributable source supports it. Do not infer positions from party affiliation, left-right labels, previous manifestos or assumptions. An absence of evidence is not evidence of a position.

Unknown positions must be excluded from the alignment calculation and reduce evidence coverage. A ranked percentage should not be published unless verified candidate evidence covers at least 6 of 12 policy areas and 12 questions. To avoid presenting an overall match from a narrow subset, the implementation also requires at least 12 comparable answered questions across 6 areas; visitors may leave answers blank, but insufficient comparison coverage produces no ranking.

## Important current limitation
The 36-question framework is present in the data and the interface now offers a 24-question standard path plus an optional 36-question extension. Candidate position coding has **not** been completed against primary sources for all questions. Existing hard-coded compass positions are legacy prototype data and must not be represented as fully verified. In the current prototype, only a small legacy set of pension and public-finance questions contributes to candidate matching. The other answers are not yet included in the ranking. This limitation is disclosed in the results.

The current scoring implementation is still a prototype and does not yet implement the full twelve-area aggregation and coverage threshold described above. It must be completed and audited before public launch.

## Source basis for issue selection
The issue map was cross-checked against public 2027 election comparison frameworks, including:
- Affinité Politique: 12 issue areas and question-by-question candidate comparisons.
- Comparatif 2027: 11 themes and 46 questions.
- Civiqo: 67 questions across 17 themes.
- République 2027: 13 themes covering budgets, work, pensions, health, housing, education, security, immigration, climate, agriculture, Europe, institutions and society.

These are used as comparative evidence of the breadth of issues under discussion, not as authoritative sources for candidate positions:
https://affinitepolitique.fr/themes
https://www.comparatif2027.fr/
https://www.civiqo.fr/presidentielle-2027/positions
https://republique2027.fr/programmes

## Governance
Review the topic map and question wording when major programmes are published. Record changes to questions, answer scales, candidate coding and weights in a dated change log. Publish corrections when source material is superseded or a coding decision changes.
