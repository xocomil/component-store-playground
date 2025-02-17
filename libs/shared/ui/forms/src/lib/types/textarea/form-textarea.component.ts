import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FieldType } from '@ngx-formly/core'

@Component({
  template: `
    <textarea
      [formControl]="$any(formControl)"
      [cols]="props.cols"
      [rows]="props.rows"
      class="shadow-sm block w-full dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-purple-500 focus:border-purple-500 sm:text-sm border-gray-300 rounded-md"
      [class.is-invalid]="showError"
      [formlyAttributes]="field"
    ></textarea>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormTextareaComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      cols: 1,
      rows: 1,
    },
  }
}
