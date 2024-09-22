function plate_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[166.3,-165.5],[183.7,-165.5]]).appendArc([184.5,-164.7],{"radius":0.8,"clockwise":false,"large":false}).appendPoint([184.5,-161.3]).appendArc([185.3,-160.5],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([202.7,-160.5]).appendArc([203.5,-159.7],{"radius":0.8,"clockwise":false,"large":false}).appendPoint([203.5,-158.3]).appendArc([204.3,-157.5],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([221.7,-157.5]).appendArc([222.5,-158.3],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([222.5,-183.7]).appendArc([223.3,-184.5],{"radius":0.8,"clockwise":false,"large":false}).appendPoint([240.7,-184.5]).appendArc([241.5,-185.3],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([241.5,-185.7]).appendArc([242.3,-186.5],{"radius":0.8,"clockwise":false,"large":false}).appendPoint([259.7,-186.5]).appendArc([260.5,-185.7],{"radius":0.8,"clockwise":false,"large":false}).appendPoint([260.5,-111.3]).appendArc([259.7,-110.5],{"radius":0.8,"clockwise":false,"large":false}).appendPoint([242.3,-110.5]).appendArc([241.5,-109.7],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([241.5,-109.3]).appendArc([240.7,-108.5],{"radius":0.8,"clockwise":false,"large":false}).appendPoint([223.3,-108.5]).appendArc([222.5,-107.7],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([222.5,-101.3]).appendArc([221.7,-100.5],{"radius":0.8,"clockwise":false,"large":false}).appendPoint([204.3,-100.5]).appendArc([203.5,-101.3],{"radius":0.8,"clockwise":false,"large":false}).appendPoint([203.5,-102.7]).appendArc([202.7,-103.5],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([185.3,-103.5]).appendArc([184.5,-104.3],{"radius":0.8,"clockwise":false,"large":false}).appendPoint([184.5,-107.7]).appendArc([183.7,-108.5],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([166.3,-108.5]).appendArc([165.5,-109.3],{"radius":0.8,"clockwise":false,"large":false}).appendPoint([165.5,-164.7]).appendArc([166.3,-165.5],{"radius":0.8,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[244,-127],[258,-127]]).appendPoint([258,-113]).appendPoint([244,-113]).appendPoint([244,-127]).close().innerToCAG()
.union(
    new CSG.Path2D([[244,-146],[258,-146]]).appendPoint([258,-132]).appendPoint([244,-132]).appendPoint([244,-146]).close().innerToCAG()
).union(
    new CSG.Path2D([[244,-165],[258,-165]]).appendPoint([258,-151]).appendPoint([244,-151]).appendPoint([244,-165]).close().innerToCAG()
).union(
    new CSG.Path2D([[244,-184],[258,-184]]).appendPoint([258,-170]).appendPoint([244,-170]).appendPoint([244,-184]).close().innerToCAG()
).union(
    new CSG.Path2D([[225,-125],[239,-125]]).appendPoint([239,-111]).appendPoint([225,-111]).appendPoint([225,-125]).close().innerToCAG()
).union(
    new CSG.Path2D([[225,-144],[239,-144]]).appendPoint([239,-130]).appendPoint([225,-130]).appendPoint([225,-144]).close().innerToCAG()
).union(
    new CSG.Path2D([[225,-163],[239,-163]]).appendPoint([239,-149]).appendPoint([225,-149]).appendPoint([225,-163]).close().innerToCAG()
).union(
    new CSG.Path2D([[225,-182],[239,-182]]).appendPoint([239,-168]).appendPoint([225,-168]).appendPoint([225,-182]).close().innerToCAG()
).union(
    new CSG.Path2D([[206,-117],[220,-117]]).appendPoint([220,-103]).appendPoint([206,-103]).appendPoint([206,-117]).close().innerToCAG()
).union(
    new CSG.Path2D([[206,-136],[220,-136]]).appendPoint([220,-122]).appendPoint([206,-122]).appendPoint([206,-136]).close().innerToCAG()
).union(
    new CSG.Path2D([[206,-155],[220,-155]]).appendPoint([220,-141]).appendPoint([206,-141]).appendPoint([206,-155]).close().innerToCAG()
).union(
    new CSG.Path2D([[187,-120],[201,-120]]).appendPoint([201,-106]).appendPoint([187,-106]).appendPoint([187,-120]).close().innerToCAG()
).union(
    new CSG.Path2D([[187,-139],[201,-139]]).appendPoint([201,-125]).appendPoint([187,-125]).appendPoint([187,-139]).close().innerToCAG()
).union(
    new CSG.Path2D([[187,-158],[201,-158]]).appendPoint([201,-144]).appendPoint([187,-144]).appendPoint([187,-158]).close().innerToCAG()
).union(
    new CSG.Path2D([[168,-125],[182,-125]]).appendPoint([182,-111]).appendPoint([168,-111]).appendPoint([168,-125]).close().innerToCAG()
).union(
    new CSG.Path2D([[168,-144],[182,-144]]).appendPoint([182,-130]).appendPoint([168,-130]).appendPoint([168,-144]).close().innerToCAG()
).union(
    new CSG.Path2D([[168,-163],[182,-163]]).appendPoint([182,-149]).appendPoint([168,-149]).appendPoint([168,-163]).close().innerToCAG()
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

        