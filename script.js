document.addEventListener("DOMContentLoaded", () => {
    const feesForm = document.getElementById("feesForm");
    const feesTableBody = document.querySelector("#feesTable tbody");

    feesForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const className = document.getElementById("class").value;
        const amount = document.getElementById("amount").value;

        const newRow = document.createElement("tr");

        [firstName, lastName, className, amount].forEach(value => {
            const newCell = document.createElement("td");
            const textNode = document.createTextNode(value);
            newCell.appendChild(textNode);
            newRow.appendChild(newCell);
        });

        const actionsCell = document.createElement("td");
        actionsCell.classList.add("actions");

        const editButton = document.createElement("button");
        editButton.classList.add("edit");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
            document.getElementById("firstName").value = firstName;
            document.getElementById("lastName").value = lastName;
            document.getElementById("class").value = className;
            document.getElementById("amount").value = amount;

            feesTableBody.removeChild(newRow);
        });

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            feesTableBody.removeChild(newRow);
        });

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
        newRow.appendChild(actionsCell);

        feesTableBody.appendChild(newRow);

        feesForm.reset();
    });
});
