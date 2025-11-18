export class CoffeeService {
  constructor() {
    this.scope = 'x_snc_coffee_desig';
    this.baseHeaders = {
      "Accept": "application/json",
      "X-UserToken": window.g_ck
    };
  }

  async getAll(tableName) {
    const response = await fetch(`/api/now/table/${tableName}?sysparm_display_value=all&sysparm_limit=100`, {
      headers: this.baseHeaders
    });
    const data = await response.json();
    return data.result || [];
  }

  async getCoffeeBeans() {
    return this.getAll(`${this.scope}_coffee_beans`);
  }

  async getMilkTypes() {
    return this.getAll(`${this.scope}_milk_types`);
  }

  async getFlavorProfiles() {
    return this.getAll(`${this.scope}_flavor_profiles`);
  }

  async getPremiumAddins() {
    return this.getAll(`${this.scope}_premium_addins`);
  }

  async createOrder(orderData) {
    const response = await fetch(`/api/now/table/${this.scope}_coffee_orders?sysparm_display_value=all`, {
      method: "POST",
      headers: {
        ...this.baseHeaders,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orderData)
    });
    return response.json();
  }

  async getOrders() {
    const response = await fetch(`/api/now/table/${this.scope}_coffee_orders?sysparm_display_value=all&sysparm_limit=50&sysparm_query=ORDERBYDESCsys_created_on`, {
      headers: this.baseHeaders
    });
    const data = await response.json();
    return data.result || [];
  }

  async updateOrder(orderId, updateData) {
    const response = await fetch(`/api/now/table/${this.scope}_coffee_orders/${orderId}?sysparm_display_value=all`, {
      method: "PATCH",
      headers: {
        ...this.baseHeaders,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateData)
    });
    return response.json();
  }
}