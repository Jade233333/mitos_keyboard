function plate_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[166.8,-166],[183.2,-166]]).appendArc([184,-165.2],{"radius":0.8,"clockwise":false,"large":false}).appendPoint([184,-161.8]).appendArc([184.8,-161],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([201.2,-161]).appendArc([202,-160.2],{"radius":0.8,"clockwise":false,"large":false}).appendPoint([202,-158.8]).appendArc([202.8,-158],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([219.2,-158]).appendArc([220,-158.8],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([220,-183.2]).appendArc([220.8,-184],{"radius":0.8,"clockwise":false,"large":false}).appendPoint([237.2,-184]).appendArc([238,-184.8],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([238,-185.2]).appendArc([238.8,-186],{"radius":0.8,"clockwise":false,"large":false}).appendPoint([255.2,-186]).appendArc([256,-185.2],{"radius":0.8,"clockwise":false,"large":false}).appendPoint([256,-114.8]).appendArc([255.2,-114],{"radius":0.8,"clockwise":false,"large":false}).appendPoint([238.8,-114]).appendArc([238,-113.2],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([238,-112.8]).appendArc([237.2,-112],{"radius":0.8,"clockwise":false,"large":false}).appendPoint([220.8,-112]).appendArc([220,-111.2],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([220,-104.8]).appendArc([219.2,-104],{"radius":0.8,"clockwise":false,"large":false}).appendPoint([202.8,-104]).appendArc([202,-104.8],{"radius":0.8,"clockwise":false,"large":false}).appendPoint([202,-106.2]).appendArc([201.2,-107],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([184.8,-107]).appendArc([184,-107.8],{"radius":0.8,"clockwise":false,"large":false}).appendPoint([184,-111.2]).appendArc([183.2,-112],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([166.8,-112]).appendArc([166,-112.8],{"radius":0.8,"clockwise":false,"large":false}).appendPoint([166,-165.2]).appendArc([166.8,-166],{"radius":0.8,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[240,-130],[254,-130]]).appendPoint([254,-116]).appendPoint([240,-116]).appendPoint([240,-130]).close().innerToCAG()
.union(
    new CSG.Path2D([[240,-148],[254,-148]]).appendPoint([254,-134]).appendPoint([240,-134]).appendPoint([240,-148]).close().innerToCAG()
).union(
    new CSG.Path2D([[240,-166],[254,-166]]).appendPoint([254,-152]).appendPoint([240,-152]).appendPoint([240,-166]).close().innerToCAG()
).union(
    new CSG.Path2D([[240,-184],[254,-184]]).appendPoint([254,-170]).appendPoint([240,-170]).appendPoint([240,-184]).close().innerToCAG()
).union(
    new CSG.Path2D([[222,-128],[236,-128]]).appendPoint([236,-114]).appendPoint([222,-114]).appendPoint([222,-128]).close().innerToCAG()
).union(
    new CSG.Path2D([[222,-146],[236,-146]]).appendPoint([236,-132]).appendPoint([222,-132]).appendPoint([222,-146]).close().innerToCAG()
).union(
    new CSG.Path2D([[222,-164],[236,-164]]).appendPoint([236,-150]).appendPoint([222,-150]).appendPoint([222,-164]).close().innerToCAG()
).union(
    new CSG.Path2D([[222,-182],[236,-182]]).appendPoint([236,-168]).appendPoint([222,-168]).appendPoint([222,-182]).close().innerToCAG()
).union(
    new CSG.Path2D([[204,-120],[218,-120]]).appendPoint([218,-106]).appendPoint([204,-106]).appendPoint([204,-120]).close().innerToCAG()
).union(
    new CSG.Path2D([[204,-138],[218,-138]]).appendPoint([218,-124]).appendPoint([204,-124]).appendPoint([204,-138]).close().innerToCAG()
).union(
    new CSG.Path2D([[204,-156],[218,-156]]).appendPoint([218,-142]).appendPoint([204,-142]).appendPoint([204,-156]).close().innerToCAG()
).union(
    new CSG.Path2D([[186,-123],[200,-123]]).appendPoint([200,-109]).appendPoint([186,-109]).appendPoint([186,-123]).close().innerToCAG()
).union(
    new CSG.Path2D([[186,-141],[200,-141]]).appendPoint([200,-127]).appendPoint([186,-127]).appendPoint([186,-141]).close().innerToCAG()
).union(
    new CSG.Path2D([[186,-159],[200,-159]]).appendPoint([200,-145]).appendPoint([186,-145]).appendPoint([186,-159]).close().innerToCAG()
).union(
    new CSG.Path2D([[168,-128],[182,-128]]).appendPoint([182,-114]).appendPoint([168,-114]).appendPoint([168,-128]).close().innerToCAG()
).union(
    new CSG.Path2D([[168,-146],[182,-146]]).appendPoint([182,-132]).appendPoint([168,-132]).appendPoint([168,-146]).close().innerToCAG()
).union(
    new CSG.Path2D([[168,-164],[182,-164]]).appendPoint([182,-150]).appendPoint([168,-150]).appendPoint([168,-164]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
}




                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = plate_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let plate__part_0_bounds = plate__part_0.getBounds();
                let plate__part_0_x = plate__part_0_bounds[0].x + (plate__part_0_bounds[1].x - plate__part_0_bounds[0].x) / 2
                let plate__part_0_y = plate__part_0_bounds[0].y + (plate__part_0_bounds[1].y - plate__part_0_bounds[0].y) / 2
                plate__part_0 = translate([-plate__part_0_x, -plate__part_0_y, 0], plate__part_0);
                plate__part_0 = rotate([0,0,0], plate__part_0);
                plate__part_0 = translate([plate__part_0_x, plate__part_0_y, 0], plate__part_0);

                plate__part_0 = translate([0,0,0], plate__part_0);
                let result = plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_case_fn();
            }

        