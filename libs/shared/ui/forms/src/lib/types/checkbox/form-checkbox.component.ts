import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FieldType } from '@ngx-formly/core'

@Component({
  template: `
    <div class="relative flex items-start">
      <div class="flex items-center h-5">
        <input
          type="checkbox"
          class="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 dark:bg-gray-800 dark:border-gray-600 rounded"
          [class.is-invalid]="showError"
          [class.static]="props.formCheck === 'nolabel'"
          [indeterminate]="props.indeterminate && formControl.value === null"
          [formControl]="$any(formControl)"
          [formlyAttributes]="field"
        />
      </div>
      <div class="ml-3 text-sm">
        <label *ngIf="props.formCheck !== 'nolabel'" class="font-medium text-gray-700 dark:text-gray-300" [for]="id">
          {{ props.label }}
          <span *ngIf="props.required && to.hideRequiredMarker !== true">*</span>
        </label>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCheckboxComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      indeterminate: true,
      hideLabel: true,
      formCheck: 'custom.', // 'custom' | 'custom-inline' | 'custom-switch' | 'stacked' | 'inline' | 'nolabel'
    },
  }
}
