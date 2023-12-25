from datetime import datetime
import json
from writer import XlsAnalyticPaymentWriter
from pathlib import Path

def load_data(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)
        return data
    except FileNotFoundError:
        print(f"File not found: {file_path}")
        return None

def generate_report_filename():
    timestamp = datetime.now().strftime('%Y_%m_%d_%H_%M_%S')
    return f'my_payments_analytics_{timestamp}.xlsx'

def main():
    base_path = Path("./")
    clients_data = load_data(base_path / 'clients.json')
    payments_data = load_data(base_path / 'payments.json')

    if clients_data is not None and payments_data is not None:
        data = {'clients': clients_data.get('clients', []), 'payments': payments_data.get('payments', [])}
        output_file = generate_report_filename()
        xls_writer = XlsAnalyticPaymentWriter(data)
        xls_writer.write_excel_report(output_file)
        print(f"Report generated successfully. Output file: {output_file}")

if __name__ == '__main__':
    main()
