import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
})
export class Pagination {
  currentPage = input<number>(1);
  totalPages = input<number>(1);

  pageChange = output<number>();

  pages = computed(() => {
    const current = this.currentPage();
    const total = this.totalPages();

    const maxVisible = 5;

    // Kalau total halaman <= 5, tampilkan semuanya
    if (total <= maxVisible) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    // Current dekat awal
    if (current <= 3) {
      return [1, 2, 3, 4, 5];
    }

    // Current dekat akhir
    if (current >= total - 2) {
      return [total - 4, total - 3, total - 2, total - 1, total];
    }

    // Current di tengah
    return [current - 2, current - 1, current, current + 1, current + 2];
  });

  previous() {
    const current = this.currentPage();

    if (current > 1) {
      this.pageChange.emit(current - 1);
    }
  }

  next() {
    const current = this.currentPage();
    const total = this.totalPages();

    if (current < total) {
      this.pageChange.emit(current + 1);
    }
  }

  goToPage(page: number) {
    if (page === this.currentPage()) {
      return;
    }

    this.pageChange.emit(page);
  }
}
