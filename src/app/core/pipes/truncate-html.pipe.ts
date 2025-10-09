import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateHtml',
  standalone:true
})
export class TruncateHtmlPipe implements PipeTransform {
  transform(value: string, limit = 100): string {
    if (!value) return '';
    const text = value.replace(/<[^>]+>/g, '');
    return text.length > limit ? text.slice(0, limit) + '…' : text;
  }
}
