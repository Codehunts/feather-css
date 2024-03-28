class SimpleAPI {
    constructor() {
      this.url = '';
      this.method = 'GET';
      this.headers = {};
      this.data = null;
      this.printMode = 'console'; 
    }
  
    setUrl(url) {
      this.url = url;
      return this;
    }
  
    setMethod(method) {
      this.method = method.toUpperCase();
      return this;
    }
  
    setHeaders(headers) {
      this.headers = headers;
      return this;
    }
  
    setData(data) {
      this.data = data;
      return this;
    }
  
    setPrintMode(mode) {
      this.printMode = mode.toLowerCase();
      return this;
    }
  
    async send() {
      try {
        const response = await fetch(this.url, {
          method: this.method,
          headers: this.headers,
          body: this.data ? JSON.stringify(this.data) : undefined,
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const responseData = await response.json();
  
        if (this.printMode === 'console') {
          console.log('Fetched data:', responseData);
        } else if (this.printMode === 'table') {
          this.printTable(responseData);
        } else {
          throw new Error('Invalid print mode. Use "console" or "table".');
        }
  
        return responseData;
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
  
    printTable(data) {
        if (data && typeof data === 'object') {
          const table = document.createElement('table');
    
         
          if (data.products && Array.isArray(data.products) && data.products.length > 0) {
            // Create table header
            const headerRow = table.insertRow();
            Object.keys(data.products[0]).forEach(key => {
              const th = document.createElement('th');
              th.textContent = key;
              headerRow.appendChild(th);
            });
    
            // Create table rows with product data
            data.products.forEach(product => {
              const row = table.insertRow();
              Object.values(product).forEach(value => {
                const cell = row.insertCell();
                cell.textContent = value !== undefined ? value : ''; 
              });
            });
          } else {
            // Case: No products data
            const row = table.insertRow();
            const cell = row.insertCell();
            cell.textContent = 'No products data available.';
          }
    
          document.body.appendChild(table);
        } else {
          console.error('Invalid data format for table printing.');
        }
      }
  }