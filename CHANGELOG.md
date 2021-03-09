v2.0.2 / 2020-03-09
=================
  * [Fix] avoid "Promise.all called on non-object" error
  * [Docs] fix rejection examples
  * [Deps] update `array.prototype.map`, `es-abstract`, `es-aggregate-error`, `iterate-value`
  * [meta] only run `aud` on prod deps
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape`, `functions-have-names`; add `aud`
  * [actions] add "Allow Edits" workflow
  * [actions] switch Automatic Rebase workflow to `pull_request_target` event

v2.0.1 / 2019-12-14
=================
  * [Fix] no longer require `Array.from`; works in older envs
  * [Refactor] use split-up `es-abstract` (39% bundle size decrease)
  * [Deps] update `es-abstract`, `es-aggregate-error`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `safe-publish-latest`
  * [meta] add `funding` field
  * [Tests] run `evalmd` in `postlint`
  * [Tests] use shared travis-ci configs
  * [actions] add automatic rebasing / merge commit blocking

v2.0.0 / 2019-10-21
=================
  * [Breaking] `Promise.any` rejects with an `AggregateError`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `functions-have-names`
  * [Deps] update `es-abstract`

v1.0.0 / 2019-03-27
=================
  * Initial spec-compliant release.

v0.1.1 / 2016-10-26
=================
  * Some improvements.

v0.1.0 / 2016-08-17
=================
  * Initial release of forked version of `promise-any`.
