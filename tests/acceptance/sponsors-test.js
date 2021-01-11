import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { setupApplicationTest } from 'ember-qunit';
import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | sponsors', function (hooks) {
  setupApplicationTest(hooks);
  setupPageTitleTest(hooks);

  test('Percy snapshot', async function (assert) {
    await visit('/sponsors');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/sponsors');
    await a11yAudit({
      rules: {
        'link-name': {
          enabled: false,
        },
        list: {
          enabled: false,
        },
      },
    });

    assert.hasPageTitle('Sponsors - Ember.js');
  });
});
