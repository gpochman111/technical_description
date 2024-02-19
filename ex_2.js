ex_2_elem = document.getElementById('instr_example_2')
ex_2_tables = ex_2_elem.getElementsByTagName('table')
ex_2 = {
    x: 0,
    y: 1,
    pc: 0,
    memory: ex_2_tables[0],
    registers: ex_2_tables[1],
    arrow: ex_2_elem.getElementsByTagName('img')[0],
    updateArrow: function () {
        ex_2.memory.rows[ex_2.pc + 1].cells[0].appendChild(ex_2.arrow);
    },
    updatePC: function () {
        ex_2.registers.rows[1].cells[1].innerText = '0x' + (ex_2.pc * 4).toString(16).padStart(4, '0')
        ex_2.updateArrow()
    },
    updateX: function () {
        ex_2.registers.rows[2].cells[1].innerText = ex_2.x
    },
    updateY: function () {
        ex_2.memory.rows[1].cells[2].innerText = "Add " + ex_2.y + " to register X";
    }
}

function update_example_2 () {
    switch (ex_2.pc) {
        case 0:
            ex_2.x += ex_2.y;
            ex_2.updateX();
            ex_2.pc += 1;
            ex_2.updatePC();
            break;
        case 1:
            ex_2.y += 1;
            ex_2.updateY();
            ex_2.pc += 1;
            ex_2.updatePC();
            break;
        case 2:
            ex_2.pc = 0;
            ex_2.updatePC();
            break;
    }
}

function updateExamples() {
    update_example_1();
    update_example_2();
}